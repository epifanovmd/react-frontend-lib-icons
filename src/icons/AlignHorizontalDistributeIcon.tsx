import React, { FC, memo } from 'react';
import AlignHorizontalDistributeSvg from '../svg/align-horizontal-distribute.svg';

export interface IAlignHorizontalDistributeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlignHorizontalDistributeIcon: FC<IAlignHorizontalDistributeIconProps> = memo(props => {
  return <AlignHorizontalDistributeSvg {...props} />;
});
