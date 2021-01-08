import Proptypes, { func } from 'prop-types';

function  Comum  (props){
    const {array,mapFunc,listClassName} = props;
    return (
         <ul className = "listClassName">
             {array.map(mapFunc)}
         </ul>

    );
}

Comum.propTypes = {
      array: Proptypes.array,
      mapFunc: Proptypes.func,
      listClassName:Proptypes.string,
}

export default Comum;