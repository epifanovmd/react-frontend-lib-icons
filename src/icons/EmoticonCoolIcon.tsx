import React, { FC, memo } from 'react';
import EmoticonCoolSvg from '../svg/emoticon-cool.svg';

export interface IEmoticonCoolIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonCoolIcon: FC<IEmoticonCoolIconProps> = memo(props => {
  return <EmoticonCoolSvg {...props} />;
});
