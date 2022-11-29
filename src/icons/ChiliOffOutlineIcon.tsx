import React, { FC, memo } from 'react';
import ChiliOffOutlineSvg from '../svg/chili-off-outline.svg';

export interface IChiliOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChiliOffOutlineIcon: FC<IChiliOffOutlineIconProps> = memo(props => {
  return <ChiliOffOutlineSvg {...props} />;
});
