import React, { FC, memo } from 'react';
import FlagOutlineSvg from '../svg/flag-outline.svg';

export interface IFlagOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagOutlineIcon: FC<IFlagOutlineIconProps> = memo(props => {
  return <FlagOutlineSvg {...props} />;
});
