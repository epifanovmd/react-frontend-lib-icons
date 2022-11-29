import React, { FC, memo } from 'react';
import QiSvg from '../svg/qi.svg';

export interface IQiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const QiIcon: FC<IQiIconProps> = memo(props => {
  return <QiSvg {...props} />;
});
