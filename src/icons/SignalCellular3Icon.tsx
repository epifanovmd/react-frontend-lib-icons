import React, { FC, memo } from 'react';
import SignalCellular3Svg from '../svg/signal-cellular-3.svg';

export interface ISignalCellular3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignalCellular3Icon: FC<ISignalCellular3IconProps> = memo(props => {
  return <SignalCellular3Svg {...props} />;
});
