import React, { FC, memo } from 'react';
import TorchSvg from '../svg/torch.svg';

export interface ITorchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TorchIcon: FC<ITorchIconProps> = memo(props => {
  return <TorchSvg {...props} />;
});
