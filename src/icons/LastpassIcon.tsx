import React, { FC, memo } from 'react';
import LastpassSvg from '../svg/lastpass.svg';

export interface ILastpassIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LastpassIcon: FC<ILastpassIconProps> = memo(props => {
  return <LastpassSvg {...props} />;
});
