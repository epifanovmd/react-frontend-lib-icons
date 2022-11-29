import React, { FC, memo } from 'react';
import SourcePullSvg from '../svg/source-pull.svg';

export interface ISourcePullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourcePullIcon: FC<ISourcePullIconProps> = memo(props => {
  return <SourcePullSvg {...props} />;
});
