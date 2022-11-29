import React, { FC, memo } from 'react';
import WavesArrowUpSvg from '../svg/waves-arrow-up.svg';

export interface IWavesArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WavesArrowUpIcon: FC<IWavesArrowUpIconProps> = memo(props => {
  return <WavesArrowUpSvg {...props} />;
});
