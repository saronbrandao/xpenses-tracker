import style from './FormContainer.module.scss';

const FormContainer = (props) => {
  return <div className={style.container}>{props.children}</div>;
};

export default FormContainer;
