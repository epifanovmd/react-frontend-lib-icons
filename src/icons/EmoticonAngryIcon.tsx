import React, { FC, memo } from 'react';
import EmoticonAngrySvg from '../svg/emoticon-angry.svg';

export interface IEmoticonAngryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonAngryIcon: FC<IEmoticonAngryIconProps> = memo(props => {
  return <EmoticonAngrySvg {...props} />;
});
