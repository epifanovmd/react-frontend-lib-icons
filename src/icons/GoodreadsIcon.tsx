import React, { FC, memo } from 'react';
import GoodreadsSvg from '../svg/goodreads.svg';

export interface IGoodreadsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoodreadsIcon: FC<IGoodreadsIconProps> = memo(props => {
  return <GoodreadsSvg {...props} />;
});
