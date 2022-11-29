import React, { FC, memo } from 'react';
import SlashForwardBoxSvg from '../svg/slash-forward-box.svg';

export interface ISlashForwardBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SlashForwardBoxIcon: FC<ISlashForwardBoxIconProps> = memo(props => {
  return <SlashForwardBoxSvg {...props} />;
});
