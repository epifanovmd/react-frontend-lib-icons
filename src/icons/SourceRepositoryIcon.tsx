import React, { FC, memo } from 'react';
import SourceRepositorySvg from '../svg/source-repository.svg';

export interface ISourceRepositoryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SourceRepositoryIcon: FC<ISourceRepositoryIconProps> = memo(props => {
  return <SourceRepositorySvg {...props} />;
});
