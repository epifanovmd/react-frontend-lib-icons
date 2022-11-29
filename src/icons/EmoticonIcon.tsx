import React, { FC, memo } from 'react';
import EmoticonSvg from '../svg/emoticon.svg';

export interface IEmoticonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonIcon: FC<IEmoticonIconProps> = memo(props => {
  return <EmoticonSvg {...props} />;
});
