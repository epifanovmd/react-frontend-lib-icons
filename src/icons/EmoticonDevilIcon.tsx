import React, { FC, memo } from 'react';
import EmoticonDevilSvg from '../svg/emoticon-devil.svg';

export interface IEmoticonDevilIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonDevilIcon: FC<IEmoticonDevilIconProps> = memo(props => {
  return <EmoticonDevilSvg {...props} />;
});
