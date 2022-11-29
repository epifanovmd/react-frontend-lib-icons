import React, { FC, memo } from 'react';
import SlashForwardSvg from '../svg/slash-forward.svg';

export interface ISlashForwardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SlashForwardIcon: FC<ISlashForwardIconProps> = memo(props => {
  return <SlashForwardSvg {...props} />;
});
