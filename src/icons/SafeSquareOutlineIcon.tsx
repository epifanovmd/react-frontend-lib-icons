import React, { FC, memo } from 'react';
import SafeSquareOutlineSvg from '../svg/safe-square-outline.svg';

export interface ISafeSquareOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SafeSquareOutlineIcon: FC<ISafeSquareOutlineIconProps> = memo(props => {
  return <SafeSquareOutlineSvg {...props} />;
});
