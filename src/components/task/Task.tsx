import clsx from 'clsx';
import { useModal } from '../../contexts/modal-context';
import { useBoard } from '../../contexts/board-context';
import { ITask } from '../../types/ITask';
import BoardMenu from '../buttons/BoardItemDropdown';
import ModalTypes from '../../types/ModalTypes';

function Task({ task }: { task: ITask }) {
  const { selectedBoard } = useBoard();
  const { setModal } = useModal();

  return (
    <div
      className={clsx(
        'flex cursor-pointer items-center justify-between rounded-xl p-4 shadow-sm transition hover:shadow-lg',
        `bg-${selectedBoard.color}-200`,
        `hover:bg-${selectedBoard.color}-300`
      )}
    >
      <div className="font-normal text-black">{task.name}</div>
      <BoardMenu
        editHandler={() => {
          setModal({
            open: true,
            type: ModalTypes.EDIT_TASK,
            data: { id: task.id },
          });
        }}
        deleteHandler={() => {
          setModal({
            open: true,
            type: ModalTypes.DELETE_TASK,
            data: { id: task.id },
          });
        }}
      />
    </div>
  );
}

export default Task;
