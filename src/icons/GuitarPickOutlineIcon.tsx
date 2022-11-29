import React, { FC, memo } from 'react';
import GuitarPickOutlineSvg from '../svg/guitar-pick-outline.svg';

export interface IGuitarPickOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GuitarPickOutlineIcon: FC<IGuitarPickOutlineIconProps> = memo(props => {
  return <GuitarPickOutlineSvg {...props} />;
});
