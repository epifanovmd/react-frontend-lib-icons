import React, { FC, memo } from 'react';
import SignalCellular1Svg from '../svg/signal-cellular-1.svg';

export interface ISignalCellular1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignalCellular1Icon: FC<ISignalCellular1IconProps> = memo(props => {
  return <SignalCellular1Svg {...props} />;
});
