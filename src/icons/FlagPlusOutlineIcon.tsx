import React, { FC, memo } from 'react';
import FlagPlusOutlineSvg from '../svg/flag-plus-outline.svg';

export interface IFlagPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagPlusOutlineIcon: FC<IFlagPlusOutlineIconProps> = memo(props => {
  return <FlagPlusOutlineSvg {...props} />;
});
