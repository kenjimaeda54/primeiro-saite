import Proptypes from 'prop-types';
function Banner(props){
      const {credits,bgimg,className,title,subtitle,children,} = props;
      return(
        <div style={bgimg && {background: bgimg}} class={className}>
        <h1>
          {title}
        </h1>     
        <h2>
          {subtitle}
        </h2>
          {children}
          {credits}
    </div>

      )

}      

Banner.propTypes ={
    credits: Proptypes.element,
    bgimg:  Proptypes.string,
    className: Proptypes.string,
    title:    Proptypes.string,
    subtitle: Proptypes.string,
    children: Proptypes.element,
}

export default Banner;
