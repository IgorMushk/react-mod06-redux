import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css'
// Импортируем объект значений фильтра
import { statusFilters } from 'redux/constants';
// Импортируем хук
import { useSelector } from 'react-redux';
import { getStatusFilter } from 'redux/selectors';

export const StatusFilter = () => {
  // Получаем значение фильтра из состояния Redux
  //const filter = useSelector(state => state.filters.status);
  const filter = useSelector(getStatusFilter);

    return (
      <div className={css.wrapper}>
        <Button selected={filter === statusFilters.all}>All</Button>
        <Button selected={filter === statusFilters.active}>Active</Button>
        <Button selected={filter === statusFilters.completed}>Completed</Button>
      </div>
    );
  };
  