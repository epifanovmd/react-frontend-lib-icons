import React, { FC, memo } from 'react';
import SourceRepositoryMultipleSvg from '../svg/source-repository-multiple.svg';

export interface ISourceRepositoryMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceRepositoryMultipleIcon: FC<ISourceRepositoryMultipleIconProps> = memo(props => {
  return <SourceRepositoryMultipleSvg {...props} />;
});
