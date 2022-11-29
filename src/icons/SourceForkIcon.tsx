import React, { FC, memo } from 'react';
import SourceForkSvg from '../svg/source-fork.svg';

export interface ISourceForkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceForkIcon: FC<ISourceForkIconProps> = memo(props => {
  return <SourceForkSvg {...props} />;
});
