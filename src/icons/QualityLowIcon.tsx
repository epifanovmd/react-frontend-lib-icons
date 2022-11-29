import React, { FC, memo } from 'react';
import QualityLowSvg from '../svg/quality-low.svg';

export interface IQualityLowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const QualityLowIcon: FC<IQualityLowIconProps> = memo(props => {
  return <QualityLowSvg {...props} />;
});
