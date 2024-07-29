import dataclasses as dc
import filecmp
import os
import typing as t

import pytest

from superduper.backends.local.artifacts import FileSystemArtifactStore
from superduper.components.component import Component
from superduper.components.datatype import (
    DataType,
    file_lazy,
    serializers,
)


@dc.dataclass(kw_only=True)
class TestComponent(Component):
    path: str
    type_id: t.ClassVar[str] = "TestComponent"

    _artifacts: t.ClassVar[t.Sequence[t.Tuple[str, "DataType"]]] = (
        ("path", file_lazy),
    )


@dc.dataclass(kw_only=True)
class TestComponentBytes(Component):
    function: callable
    type_id: t.ClassVar[str] = "TestComponent"

    _artifacts: t.ClassVar[t.Sequence[t.Tuple[str, "DataType"]]] = (
        ("path", file_lazy),
    )


@pytest.fixture
def random_directory(tmpdir):
    tmpdir_path = os.path.join(tmpdir, "test_data")
    os.makedirs(tmpdir_path, exist_ok=True)
    for i in range(10):
        file_name = f'{i}.txt'
        file_path = os.path.join(tmpdir_path, file_name)

        with open(file_path, 'w') as file:
            file.write(str(i))

        for j in range(10):
            sub_dir = os.path.join(tmpdir_path, f'subdir_{j}')
            os.makedirs(sub_dir, exist_ok=True)
            sub_file_path = os.path.join(sub_dir, file_name)
            with open(sub_file_path, 'w') as file:
                file.write(f"{i} {j}")

    return tmpdir_path


@pytest.fixture
def artifact_store(tmpdir) -> FileSystemArtifactStore:
    tmpdir_path = os.path.join(tmpdir, "artifact_store")
    artifact_strore = FileSystemArtifactStore(f"{tmpdir_path}")
    artifact_strore._serializers = serializers
    return artifact_strore


def test_save_and_load_directory(
    db, artifact_store: FileSystemArtifactStore, random_directory
):
    db.artifact_store = artifact_store

    # test save and load directory
    test_component = TestComponent(path=random_directory, identifier="test")
    db.add(test_component)
    test_component_loaded = db.load("TestComponent", "test")
    test_component_loaded.init()
    # assert that the paths are different
    assert test_component.path != test_component_loaded.path
    # assert that the directory names are the same
    assert (
        os.path.split(test_component.path)[-1]
        == os.path.split(test_component_loaded.path)[-1]
    )
    # assert that the directory sizes are the same
    assert os.path.getsize(test_component.path) == os.path.getsize(
        test_component_loaded.path
    )


def test_save_and_load_file(db, artifact_store: FileSystemArtifactStore):
    db.artifact_store = artifact_store
    # test save and load file
    file = os.path.abspath(__file__)
    test_component = TestComponent(path=file, identifier="test")
    db.add(test_component)
    test_component_loaded = db.load("TestComponent", "test")
    test_component_loaded.init()

    # assert that the paths are different
    assert test_component.path != test_component_loaded.path
    # assert that the file names are the same
    assert (
        os.path.split(test_component.path)[-1]
        == os.path.split(test_component_loaded.path)[-1]
    )
    # assert that the file sizes are the same
    assert filecmp.cmp(test_component.path, test_component_loaded.path)


def test_duplicate_artifact(capfd, db, artifact_store: FileSystemArtifactStore):
    db.artifact_store = artifact_store

    def my_func(x):
        return x

    test_component = TestComponentBytes(function=my_func, identifier="test")
    db.add(test_component)
    test_component_loaded = db.load("TestComponent", "test")
    test_component_loaded.init()

    # This should use skip the artifact since it exists
    test_component = TestComponentBytes(function=my_func, identifier="test")
    db.add(test_component)
    out, _ = capfd.readouterr()

    # assert "Artifact with file_id" in out
    assert "already exists" in out
