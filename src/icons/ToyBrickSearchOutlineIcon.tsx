import React, { FC, memo } from 'react';
import ToyBrickSearchOutlineSvg from '../svg/toy-brick-search-outline.svg';

export interface IToyBrickSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToyBrickSearchOutlineIcon: FC<IToyBrickSearchOutlineIconProps> = memo(props => {
  return <ToyBrickSearchOutlineSvg {...props} />;
});
