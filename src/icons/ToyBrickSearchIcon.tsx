import React, { FC, memo } from 'react';
import ToyBrickSearchSvg from '../svg/toy-brick-search.svg';

export interface IToyBrickSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToyBrickSearchIcon: FC<IToyBrickSearchIconProps> = memo(props => {
  return <ToyBrickSearchSvg {...props} />;
});
