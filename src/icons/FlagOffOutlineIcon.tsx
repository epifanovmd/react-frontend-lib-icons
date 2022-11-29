import React, { FC, memo } from 'react';
import FlagOffOutlineSvg from '../svg/flag-off-outline.svg';

export interface IFlagOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagOffOutlineIcon: FC<IFlagOffOutlineIconProps> = memo(props => {
  return <FlagOffOutlineSvg {...props} />;
});
