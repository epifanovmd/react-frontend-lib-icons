import React, { FC, memo } from 'react';
import QualityMediumSvg from '../svg/quality-medium.svg';

export interface IQualityMediumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const QualityMediumIcon: FC<IQualityMediumIconProps> = memo(props => {
  return <QualityMediumSvg {...props} />;
});
