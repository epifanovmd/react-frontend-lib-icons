import React, { FC, memo } from 'react';
import RelationZeroOrOneToOneSvg from '../svg/relation-zero-or-one-to-one.svg';

export interface IRelationZeroOrOneToOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationZeroOrOneToOneIcon: FC<IRelationZeroOrOneToOneIconProps> = memo(props => {
  return <RelationZeroOrOneToOneSvg {...props} />;
});
