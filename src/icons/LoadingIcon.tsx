import React, { FC, memo } from 'react';
import LoadingSvg from '../svg/loading.svg';

export interface ILoadingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LoadingIcon: FC<ILoadingIconProps> = memo(props => {
  return <LoadingSvg {...props} />;
});
