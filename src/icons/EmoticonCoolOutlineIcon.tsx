import React, { FC, memo } from 'react';
import EmoticonCoolOutlineSvg from '../svg/emoticon-cool-outline.svg';

export interface IEmoticonCoolOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonCoolOutlineIcon: FC<IEmoticonCoolOutlineIconProps> = memo(props => {
  return <EmoticonCoolOutlineSvg {...props} />;
});
