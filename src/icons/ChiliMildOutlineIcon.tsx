import React, { FC, memo } from 'react';
import ChiliMildOutlineSvg from '../svg/chili-mild-outline.svg';

export interface IChiliMildOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChiliMildOutlineIcon: FC<IChiliMildOutlineIconProps> = memo(props => {
  return <ChiliMildOutlineSvg {...props} />;
});
