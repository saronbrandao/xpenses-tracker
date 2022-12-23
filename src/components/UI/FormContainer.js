import style from './FormContainer.module.scss';

const FormContainer = (props) => {
  return (
    <div className={style.main_container}>
      <div className={style.container}>{props.children}</div>
    </div>
  );
};

export default FormContainer;
