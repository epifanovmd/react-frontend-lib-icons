import React, { FC, memo } from 'react';
import RelationOneToZeroOrManySvg from '../svg/relation-one-to-zero-or-many.svg';

export interface IRelationOneToZeroOrManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOneToZeroOrManyIcon: FC<IRelationOneToZeroOrManyIconProps> = memo(props => {
  return <RelationOneToZeroOrManySvg {...props} />;
});
