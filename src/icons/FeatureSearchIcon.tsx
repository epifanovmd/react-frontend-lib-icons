import React, { FC, memo } from 'react';
import FeatureSearchSvg from '../svg/feature-search.svg';

export interface IFeatureSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FeatureSearchIcon: FC<IFeatureSearchIconProps> = memo(props => {
  return <FeatureSearchSvg {...props} />;
});
