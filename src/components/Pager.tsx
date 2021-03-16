import React from 'react';
import { Link } from "gatsby-plugin-intl"
import tw from 'twin.macro';

export const PaginationButton = tw(Link)`w-24 h-10 text-center pt-2 shadow-md m-1 outline-none duration-200
hover:(cursor-pointer bg-gray-300)`;

const Pager: React.FC = (props) => {

  const { previousPagePath, nextPagePath } = props.pageContext;
  console.log(nextPagePath)

  return (
    <React.Fragment>
      {previousPagePath != "" ?
        <PaginationButton to={previousPagePath}>Previous</PaginationButton> : <div></div>
      }
      {nextPagePath != "" ?
        <PaginationButton to={nextPagePath}>Next</PaginationButton> : <div></div>
      }
    </React.Fragment>
  )
}

export default Pager;
