import style from './Footer.module.scss';

function Footer(): JSX.Element {
  return (
    <footer className={style.footer}>
      <div className={style.footer__copyright}>
        © 2020 - 2021 Example Site
      </div>
      <p className={style.footer__copy}>
        Built with 
        <a 
          className={style.footer__link} 
          href='https://reactjs.org' 
          target='_blank'
        > React
        </a>
        <br/>
        Original theme 
        <a 
          href='https://github.com/CaiJimmy/hugo-theme-stack' 
          target='_blank'
          className={style.footer__link} 
        > Stack
        </a> designed by 
        <a 
          className={style.footer__link} 
          href='https://jimmycai.com' 
          target='_blank'
        > Jimmy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
