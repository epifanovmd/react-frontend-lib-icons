import React, { FC, memo } from 'react';
import QqchatSvg from '../svg/qqchat.svg';

export interface IQqchatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const QqchatIcon: FC<IQqchatIconProps> = memo(props => {
  return <QqchatSvg {...props} />;
});
