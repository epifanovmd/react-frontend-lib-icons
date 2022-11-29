import React, { FC, memo } from 'react';
import RawOffSvg from '../svg/raw-off.svg';

export interface IRawOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RawOffIcon: FC<IRawOffIconProps> = memo(props => {
  return <RawOffSvg {...props} />;
});
