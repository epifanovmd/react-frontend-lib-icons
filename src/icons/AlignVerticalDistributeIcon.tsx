import React, { FC, memo } from 'react';
import AlignVerticalDistributeSvg from '../svg/align-vertical-distribute.svg';

export interface IAlignVerticalDistributeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlignVerticalDistributeIcon: FC<IAlignVerticalDistributeIconProps> = memo(props => {
  return <AlignVerticalDistributeSvg {...props} />;
});
