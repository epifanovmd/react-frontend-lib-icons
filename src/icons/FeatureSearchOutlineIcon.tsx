import React, { FC, memo } from 'react';
import FeatureSearchOutlineSvg from '../svg/feature-search-outline.svg';

export interface IFeatureSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FeatureSearchOutlineIcon: FC<IFeatureSearchOutlineIconProps> = memo(props => {
  return <FeatureSearchOutlineSvg {...props} />;
});
