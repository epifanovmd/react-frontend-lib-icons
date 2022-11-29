import React, { FC, memo } from 'react';
import QualityHighSvg from '../svg/quality-high.svg';

export interface IQualityHighIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const QualityHighIcon: FC<IQualityHighIconProps> = memo(props => {
  return <QualityHighSvg {...props} />;
});
