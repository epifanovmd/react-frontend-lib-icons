import React, { FC, memo } from 'react';
import SignalCellularOutlineSvg from '../svg/signal-cellular-outline.svg';

export interface ISignalCellularOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignalCellularOutlineIcon: FC<ISignalCellularOutlineIconProps> = memo(props => {
  return <SignalCellularOutlineSvg {...props} />;
});
