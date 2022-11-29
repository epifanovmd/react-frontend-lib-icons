import React, { FC, memo } from 'react';
import FlagRemoveOutlineSvg from '../svg/flag-remove-outline.svg';

export interface IFlagRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagRemoveOutlineIcon: FC<IFlagRemoveOutlineIconProps> = memo(props => {
  return <FlagRemoveOutlineSvg {...props} />;
});
