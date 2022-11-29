import React, { FC, memo } from 'react';
import EmoticonKissSvg from '../svg/emoticon-kiss.svg';

export interface IEmoticonKissIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonKissIcon: FC<IEmoticonKissIconProps> = memo(props => {
  return <EmoticonKissSvg {...props} />;
});
