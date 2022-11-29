import React, { FC, memo } from 'react';
import SignalCellular2Svg from '../svg/signal-cellular-2.svg';

export interface ISignalCellular2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignalCellular2Icon: FC<ISignalCellular2IconProps> = memo(props => {
  return <SignalCellular2Svg {...props} />;
});
